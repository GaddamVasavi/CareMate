import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeToast } from '../../store/slices/uiSlice';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state: RootState) => state.ui.toasts);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-md w-full pointer-events-none px-4">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={() => dispatch(removeToast(toast.id))}
        />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{
  toast: { id: string; type: string; message: string };
  onClose: () => void;
}> = ({ toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-sky-600 flex-shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-200 bg-white/95 text-slate-800',
    error: 'border-rose-200 bg-white/95 text-slate-800',
    warning: 'border-amber-200 bg-white/95 text-slate-800',
    info: 'border-sky-200 bg-white/95 text-slate-800',
  };

  return (
    <div
      className={`pointer-events-auto flex items-center justify-between p-4 rounded-2xl border shadow-lg backdrop-blur-md transition-all duration-300 transform translate-y-0 ${
        borders[toast.type as keyof typeof borders] || borders.info
      }`}
    >
      <div className="flex items-center gap-3">
        {icons[toast.type as keyof typeof icons] || icons.info}
        <p className="text-sm font-medium">{toast.message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
