import { useState, useEffect, FormEvent } from 'react';
import { MenuItem } from './MenuSection';
import '../styles/menu.css';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: MenuItem | null;
}

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

const OrderModal = ({ isOpen, onClose, selectedItem }: OrderModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', phone: '', message: '' });
      setErrors({});
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    alert(`Order placed successfully!\n\nItem: ${selectedItem?.name}\nName: ${formData.name}\nPhone: ${formData.phone}`);
    
    setIsSubmitting(false);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`order-modal ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="order-modal-overlay"></div>
      <div className="order-modal-content">
        <div className="order-modal-header">
          <button
            className="order-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
          <h2 className="order-modal-title">Place Your Order</h2>
          <p className="order-modal-subtitle">
            Fill in your details and we'll contact you shortly
          </p>
        </div>

        <div className="order-modal-body">
          <form className="order-form" onSubmit={handleSubmit}>
            {/* Selected Item */}
            <div className="form-group">
              <label className="form-label">Selected Item</label>
              <input
                type="text"
                className="form-input readonly"
                value={selectedItem?.name || ''}
                readOnly
              />
            </div>

            {/* Name */}
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                className={`form-input ${errors.phone ? 'error' : ''}`}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            {/* Message */}
            <div className="form-group">
              <label className="form-label">Special Instructions</label>
              <textarea
                className="form-textarea"
                placeholder="Any special requests or notes..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Submit */}
            <div className="order-form-submit">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Placing Order...' : 'Place Order'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
