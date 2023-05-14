import { BigNumberish, providers } from "ethers";
import { CustomUserOperationStruct } from "../executor/common";

export type EstimatedUserOperationGas = {
  preVerificationGas: BigNumberish;
  verificationGas: BigNumberish;
  callGasLimit: BigNumberish;
  validAfter?: BigNumberish;
  validUntil?: BigNumberish;
};

export type UserOperationByHashResponse = {
  userOperation: CustomUserOperationStruct;
  entryPoint: string;
  blockNumber: number;
  blockHash: string;
  transactionHash: string;
};

export type UserOperationReceipt = {
  userOpHash: string;
  sender: string;
  nonce: BigNumberish;
  paymaster?: string;
  actualGasCost: BigNumberish;
  actualGasUsed: BigNumberish;
  success: boolean;
  reason?: string;
  logs: any[];
  receipt: providers.TransactionReceipt;
};

export type SupportedEntryPoints = string[];

export type EthChainIdResponse = { chainId: number };

export type BundlingMode = "auto" | "manual";

export interface ServerConfig {
  enableRequestLogging: boolean;
  port: number;
  host: string;
  cors: string;
}
