export type transactionType = {
  connectWallet: () => void;
  currentAccount: string;
  formData: {
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      addressTo: string;
      amount: string;
      keyword: string;
      message: string;
    }>
  >;
  handleChange: any;
  sendTransaction: () => Promise<void>;
  transactions: never[];
  transaction: never[];
  getTransaction: (network: string) => Promise<void>;
  network: string;
  setNetwork: React.Dispatch<React.SetStateAction<string>>;
};
