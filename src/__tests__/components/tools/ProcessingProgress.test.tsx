import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProcessingProgress } from '@/components/tools/ProcessingProgress';

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      'status.idle': 'Ready',
      'status.uploading': 'Uploading',
      'status.processing': 'Processing',
      'status.complete': 'Complete',
      'status.error': 'Error',
      'buttons.cancel': 'Cancel',
    };
    return translations[key] || key;
  },
}));

describe('ProcessingProgress', () => {
  describe('Rendering', () => {
    it('does not render when status is idle', () => {
      const { container } = render(
        <ProcessingProgress progress={0} status="idle" />
      );
      
      expect(container.firstChild).toBeNull();
    });

    it('renders when status is uploading', () => {
      render(<ProcessingProgress progress={50} status="uploading" />);
      
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByText('Uploading')).toBeInTheDocument();
    });

    it('renders when status is processing', () => {
      render(<ProcessingProgress progress={75} status="processing" />);
      
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByText('Processing')).toBeInTheDocument();
    });

    it('renders when status is complete', () => {
      render(<ProcessingProgress progress={100} status="complete" />);
      
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByText('Complete')).toBeInTheDocument();
    });

    it('renders when status is error', () => {
      render(<ProcessingProgress progress={50} status="error" />);
      
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });

  describe('Progress Display', () => {
    it('displays percentage when showPercentage is true', () => {
      render(
        <ProcessingProgress 
          progress={75} 
          status="processing"
          showPercentage={true}
        />
      );
      
      expect(screen.getAllByText('75%')).toHaveLength(1);
    });

    it('hides the header percentage when showPercentage is false', () => {
      render(
        <ProcessingProgress 
          progress={75} 
          status="processing"
          showPercentage={false}
        />
      );
      
      expect(screen.queryAllByText('75%')).toHaveLength(0);
    });

    it('clamps progress to 0-100 range', () => {
      const { rerender } = render(
        <ProcessingProgress progress={-10} status="processing" />
      );
      
      expect(screen.getAllByText('0%')).toHaveLength(1);

      rerender(<ProcessingProgress progress={150} status="processing" />);
      expect(screen.getAllByText('100%')).toHaveLength(1);
    });

    it('rounds progress to nearest integer', () => {
      render(<ProcessingProgress progress={75.7} status="processing" />);
      
      expect(screen.getAllByText('76%')).toHaveLength(1);
    });
  });

  describe('Message Display', () => {
    it('displays custom message', () => {
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          message="Processing page 5 of 10"
        />
      );
      
      expect(screen.getByText('Processing page 5 of 10')).toBeInTheDocument();
    });

    it('handles empty message', () => {
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          message=""
        />
      );
      
      // Should not throw error
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  describe('Estimated Time', () => {
    it('displays estimated time in seconds', () => {
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          estimatedTime={30}
          showEstimatedTime={true}
        />
      );
      
      expect(screen.getByText('30s remaining')).toBeInTheDocument();
    });

    it('displays estimated time in minutes and seconds', () => {
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          estimatedTime={90}
          showEstimatedTime={true}
        />
      );
      
      expect(screen.getByText('1m 30s remaining')).toBeInTheDocument();
    });

    it('displays estimated time in hours and minutes', () => {
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          estimatedTime={3700}
          showEstimatedTime={true}
        />
      );
      
      expect(screen.getByText('1h 1m remaining')).toBeInTheDocument();
    });

    it('does not display estimated time when showEstimatedTime is false', () => {
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          estimatedTime={30}
          showEstimatedTime={false}
        />
      );
      
      expect(screen.queryByText(/remaining/)).not.toBeInTheDocument();
    });

    it('does not display estimated time when status is complete', () => {
      render(
        <ProcessingProgress 
          progress={100} 
          status="complete"
          estimatedTime={30}
          showEstimatedTime={true}
        />
      );
      
      expect(screen.queryByText(/remaining/)).not.toBeInTheDocument();
    });

    it('does not display estimated time when value is 0 or negative', () => {
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          estimatedTime={0}
          showEstimatedTime={true}
        />
      );
      
      expect(screen.queryByText(/remaining/)).not.toBeInTheDocument();
    });
  });

  describe('Cancel Button', () => {
    it('shows cancel button when onCancel is provided and status is processing', () => {
      const mockOnCancel = vi.fn();
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          onCancel={mockOnCancel}
        />
      );
      
      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('shows cancel button when onCancel is provided and status is uploading', () => {
      const mockOnCancel = vi.fn();
      render(
        <ProcessingProgress 
          progress={50} 
          status="uploading"
          onCancel={mockOnCancel}
        />
      );
      
      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('does not show cancel button when status is complete', () => {
      const mockOnCancel = vi.fn();
      render(
        <ProcessingProgress 
          progress={100} 
          status="complete"
          onCancel={mockOnCancel}
        />
      );
      
      expect(screen.queryByRole('button', { name: /cancel/i })).not.toBeInTheDocument();
    });

    it('does not show cancel button when status is error', () => {
      const mockOnCancel = vi.fn();
      render(
        <ProcessingProgress 
          progress={50} 
          status="error"
          onCancel={mockOnCancel}
        />
      );
      
      expect(screen.queryByRole('button', { name: /cancel/i })).not.toBeInTheDocument();
    });

    it('calls onCancel when cancel button is clicked', () => {
      const mockOnCancel = vi.fn();
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          onCancel={mockOnCancel}
        />
      );
      
      fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
      
      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has proper progressbar role', () => {
      render(<ProcessingProgress progress={50} status="processing" />);
      
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('has proper aria-valuenow', () => {
      render(<ProcessingProgress progress={75} status="processing" />);
      
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '75');
    });

    it('has proper aria-valuemin and aria-valuemax', () => {
      render(<ProcessingProgress progress={50} status="processing" />);
      
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuemin', '0');
      expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    });

    it('has descriptive aria-label', () => {
      render(<ProcessingProgress progress={75} status="processing" />);
      
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-label', 'Processing: 75%');
    });
  });

  describe('Visual States', () => {
    it('applies custom className', () => {
      render(
        <ProcessingProgress 
          progress={50} 
          status="processing"
          className="custom-class"
        />
      );
      
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveClass('custom-class');
    });
  });
});
