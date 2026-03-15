import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type SavedFundAllocation = { name: string; allocation: number };

interface FutureSubmissionContextType {
  referenceNumber: string;
  submittedAt: string;
  submittedEmployerMandatoryFunds: SavedFundAllocation[];
  submittedEmployeeMandatoryFunds: SavedFundAllocation[];
  setSubmittedEmployerMandatoryFunds: React.Dispatch<React.SetStateAction<SavedFundAllocation[]>>;
  setSubmittedEmployeeMandatoryFunds: React.Dispatch<React.SetStateAction<SavedFundAllocation[]>>;
}

const FutureSubmissionContext = createContext<FutureSubmissionContextType | undefined>(undefined);

export const FutureSubmissionProvider = ({ children }: { children: ReactNode }) => {
  const referenceNumber = useMemo(() => 'IMD' + Date.now().toString().slice(-16), []);
  const [submittedEmployerMandatoryFunds, setSubmittedEmployerMandatoryFunds] = useState<SavedFundAllocation[]>([]);
  const [submittedEmployeeMandatoryFunds, setSubmittedEmployeeMandatoryFunds] = useState<SavedFundAllocation[]>([]);
  const submittedAt = useMemo(() => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    return `${dateStr}, ${timeStr}`;
  }, []);
  return (
    <FutureSubmissionContext.Provider value={{ referenceNumber, submittedAt, submittedEmployerMandatoryFunds, submittedEmployeeMandatoryFunds, setSubmittedEmployerMandatoryFunds, setSubmittedEmployeeMandatoryFunds }}>
      {children}
    </FutureSubmissionContext.Provider>
  );
};

export const useFutureSubmission = () => {
  const ctx = useContext(FutureSubmissionContext);
  if (!ctx) throw new Error('useFutureSubmission must be used within FutureSubmissionProvider');
  return ctx;
};
