import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';

describe('Card', () => {
  describe('Rendering', () => {
    it('renders with children', () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders with default variant', () => {
      render(<Card>Default</Card>);
      const card = screen.getByText('Default');
      expect(card).toHaveClass('bg-[hsl(var(--color-elevated))]');
      expect(card).toHaveClass('border');
    });

    it('renders elevated variant', () => {
      render(<Card variant="elevated">Elevated</Card>);
      const card = screen.getByText('Elevated');
      expect(card).toHaveClass('shadow-md');
      expect(card).toHaveClass('border');
    });

    it('renders outlined variant', () => {
      render(<Card variant="outlined">Outlined</Card>);
      const card = screen.getByText('Outlined');
      expect(card).toHaveClass('border-2');
      expect(card).toHaveClass('bg-transparent');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Card size="sm">Small</Card>);
      const card = screen.getByText('Small');
      expect(card).toHaveClass('p-3');
    });

    it('renders medium size (default)', () => {
      render(<Card>Medium</Card>);
      const card = screen.getByText('Medium');
      expect(card).toHaveClass('p-4');
    });

    it('renders large size', () => {
      render(<Card size="lg">Large</Card>);
      const card = screen.getByText('Large');
      expect(card).toHaveClass('p-6');
    });
  });

  describe('Hover Effects', () => {
    it('applies hover styles when hover prop is true', () => {
      render(<Card hover>Hoverable</Card>);
      const card = screen.getByText('Hoverable');
      expect(card).toHaveClass('hover:shadow-lg');
      expect(card).toHaveClass('hover:-translate-y-1');
    });

    it('does not apply hover styles by default', () => {
      render(<Card>No hover</Card>);
      const card = screen.getByText('No hover');
      expect(card).not.toHaveClass('hover:shadow-[var(--shadow-lg)]');
    });
  });

  describe('Clickable', () => {
    it('is focusable when clickable', () => {
      render(<Card clickable>Clickable</Card>);
      const card = screen.getByText('Clickable');
      expect(card).toHaveAttribute('tabIndex', '0');
      expect(card).toHaveAttribute('role', 'button');
    });

    it('is not focusable by default', () => {
      render(<Card>Not clickable</Card>);
      const card = screen.getByText('Not clickable');
      expect(card).not.toHaveAttribute('tabIndex');
      expect(card).not.toHaveAttribute('role');
    });

    it('handles click events when clickable', () => {
      const handleClick = vi.fn();
      render(<Card clickable onClick={handleClick}>Clickable</Card>);
      fireEvent.click(screen.getByText('Clickable'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      render(<Card className="custom-class">Custom</Card>);
      const card = screen.getByText('Custom');
      expect(card).toHaveClass('custom-class');
    });
  });
});

describe('Card Subcomponents', () => {
  describe('CardHeader', () => {
    it('renders with children', () => {
      render(<CardHeader>Header content</CardHeader>);
      expect(screen.getByText('Header content')).toBeInTheDocument();
    });

    it('applies margin bottom', () => {
      render(<CardHeader>Header</CardHeader>);
      const header = screen.getByText('Header');
      expect(header).toHaveClass('mb-3');
    });
  });

  describe('CardTitle', () => {
    it('renders as h3 by default', () => {
      render(<CardTitle>Title</CardTitle>);
      const title = screen.getByRole('heading', { level: 3 });
      expect(title).toHaveTextContent('Title');
    });

    it('renders as specified heading level', () => {
      render(<CardTitle as="h2">Title</CardTitle>);
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toHaveTextContent('Title');
    });

    it('applies title styles', () => {
      render(<CardTitle>Styled Title</CardTitle>);
      const title = screen.getByText('Styled Title');
      expect(title).toHaveClass('text-lg');
      expect(title).toHaveClass('font-semibold');
    });
  });

  describe('CardContent', () => {
    it('renders with children', () => {
      render(<CardContent>Content text</CardContent>);
      expect(screen.getByText('Content text')).toBeInTheDocument();
    });

    it('applies muted foreground color', () => {
      render(<CardContent>Content</CardContent>);
      const content = screen.getByText('Content');
      expect(content).toHaveClass('text-[hsl(var(--color-muted-foreground))]');
    });
  });

  describe('CardFooter', () => {
    it('renders with children', () => {
      render(<CardFooter>Footer content</CardFooter>);
      expect(screen.getByText('Footer content')).toBeInTheDocument();
    });

    it('applies border and spacing', () => {
      render(<CardFooter>Footer</CardFooter>);
      const footer = screen.getByText('Footer');
      expect(footer).toHaveClass('mt-4');
      expect(footer).toHaveClass('pt-3');
      expect(footer).toHaveClass('border-t');
    });
  });

  describe('Composed Card', () => {
    it('renders a complete card with all subcomponents', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>Card body content</CardContent>
          <CardFooter>Card footer</CardFooter>
        </Card>
      );

      expect(screen.getByRole('heading', { name: 'Card Title' })).toBeInTheDocument();
      expect(screen.getByText('Card body content')).toBeInTheDocument();
      expect(screen.getByText('Card footer')).toBeInTheDocument();
    });
  });
});
