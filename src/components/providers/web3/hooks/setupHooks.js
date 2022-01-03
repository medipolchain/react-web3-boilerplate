import { handler as createAccountHook } from "./useAccount";

export const setupHooks = (web3, provider) => {
  return {
    useAccount: createAccountHook(web3, provider),
  };
};
