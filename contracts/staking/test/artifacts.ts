/*
 * -----------------------------------------------------------------------------
 * Warning: This file is auto-generated by contracts-gen. Don't edit manually.
 * -----------------------------------------------------------------------------
 */
import { ContractArtifact } from 'ethereum-types';

import * as IStaking from '../test/generated-artifacts/IStaking.json';
import * as IStakingEvents from '../test/generated-artifacts/IStakingEvents.json';
import * as IStakingProxy from '../test/generated-artifacts/IStakingProxy.json';
import * as IStorage from '../test/generated-artifacts/IStorage.json';
import * as IStorageInit from '../test/generated-artifacts/IStorageInit.json';
import * as IStructs from '../test/generated-artifacts/IStructs.json';
import * as IZrxVault from '../test/generated-artifacts/IZrxVault.json';
import * as LibCobbDouglas from '../test/generated-artifacts/LibCobbDouglas.json';
import * as LibFixedMath from '../test/generated-artifacts/LibFixedMath.json';
import * as LibFixedMathRichErrors from '../test/generated-artifacts/LibFixedMathRichErrors.json';
import * as LibSafeDowncast from '../test/generated-artifacts/LibSafeDowncast.json';
import * as LibStakingRichErrors from '../test/generated-artifacts/LibStakingRichErrors.json';
import * as MixinAbstract from '../test/generated-artifacts/MixinAbstract.json';
import * as MixinConstants from '../test/generated-artifacts/MixinConstants.json';
import * as MixinCumulativeRewards from '../test/generated-artifacts/MixinCumulativeRewards.json';
import * as MixinDeploymentConstants from '../test/generated-artifacts/MixinDeploymentConstants.json';
import * as MixinExchangeFees from '../test/generated-artifacts/MixinExchangeFees.json';
import * as MixinExchangeManager from '../test/generated-artifacts/MixinExchangeManager.json';
import * as MixinFinalizer from '../test/generated-artifacts/MixinFinalizer.json';
import * as MixinParams from '../test/generated-artifacts/MixinParams.json';
import * as MixinScheduler from '../test/generated-artifacts/MixinScheduler.json';
import * as MixinStake from '../test/generated-artifacts/MixinStake.json';
import * as MixinStakeBalances from '../test/generated-artifacts/MixinStakeBalances.json';
import * as MixinStakeStorage from '../test/generated-artifacts/MixinStakeStorage.json';
import * as MixinStakingPool from '../test/generated-artifacts/MixinStakingPool.json';
import * as MixinStakingPoolRewards from '../test/generated-artifacts/MixinStakingPoolRewards.json';
import * as MixinStorage from '../test/generated-artifacts/MixinStorage.json';
import * as Staking from '../test/generated-artifacts/Staking.json';
import * as StakingProxy from '../test/generated-artifacts/StakingProxy.json';
import * as TestAssertStorageParams from '../test/generated-artifacts/TestAssertStorageParams.json';
import * as TestCobbDouglas from '../test/generated-artifacts/TestCobbDouglas.json';
import * as TestCumulativeRewardTracking from '../test/generated-artifacts/TestCumulativeRewardTracking.json';
import * as TestDelegatorRewards from '../test/generated-artifacts/TestDelegatorRewards.json';
import * as TestExchangeManager from '../test/generated-artifacts/TestExchangeManager.json';
import * as TestFinalizer from '../test/generated-artifacts/TestFinalizer.json';
import * as TestInitTarget from '../test/generated-artifacts/TestInitTarget.json';
import * as TestLibFixedMath from '../test/generated-artifacts/TestLibFixedMath.json';
import * as TestLibSafeDowncast from '../test/generated-artifacts/TestLibSafeDowncast.json';
import * as TestMixinCumulativeRewards from '../test/generated-artifacts/TestMixinCumulativeRewards.json';
import * as TestMixinParams from '../test/generated-artifacts/TestMixinParams.json';
import * as TestMixinScheduler from '../test/generated-artifacts/TestMixinScheduler.json';
import * as TestMixinStake from '../test/generated-artifacts/TestMixinStake.json';
import * as TestMixinStakeBalances from '../test/generated-artifacts/TestMixinStakeBalances.json';
import * as TestMixinStakeStorage from '../test/generated-artifacts/TestMixinStakeStorage.json';
import * as TestMixinStakingPool from '../test/generated-artifacts/TestMixinStakingPool.json';
import * as TestMixinStakingPoolRewards from '../test/generated-artifacts/TestMixinStakingPoolRewards.json';
import * as TestProtocolFees from '../test/generated-artifacts/TestProtocolFees.json';
import * as TestProxyDestination from '../test/generated-artifacts/TestProxyDestination.json';
import * as TestStaking from '../test/generated-artifacts/TestStaking.json';
import * as TestStakingNoWETH from '../test/generated-artifacts/TestStakingNoWETH.json';
import * as TestStakingProxy from '../test/generated-artifacts/TestStakingProxy.json';
import * as TestStakingProxyUnit from '../test/generated-artifacts/TestStakingProxyUnit.json';
import * as TestStorageLayoutAndConstants from '../test/generated-artifacts/TestStorageLayoutAndConstants.json';
import * as ZrxVault from '../test/generated-artifacts/ZrxVault.json';
export const artifacts = {
    Staking: Staking as ContractArtifact,
    StakingProxy: StakingProxy as ContractArtifact,
    ZrxVault: ZrxVault as ContractArtifact,
    MixinExchangeFees: MixinExchangeFees as ContractArtifact,
    MixinExchangeManager: MixinExchangeManager as ContractArtifact,
    MixinConstants: MixinConstants as ContractArtifact,
    MixinDeploymentConstants: MixinDeploymentConstants as ContractArtifact,
    MixinStorage: MixinStorage as ContractArtifact,
    IStaking: IStaking as ContractArtifact,
    IStakingEvents: IStakingEvents as ContractArtifact,
    IStakingProxy: IStakingProxy as ContractArtifact,
    IStorage: IStorage as ContractArtifact,
    IStorageInit: IStorageInit as ContractArtifact,
    IStructs: IStructs as ContractArtifact,
    IZrxVault: IZrxVault as ContractArtifact,
    LibCobbDouglas: LibCobbDouglas as ContractArtifact,
    LibFixedMath: LibFixedMath as ContractArtifact,
    LibFixedMathRichErrors: LibFixedMathRichErrors as ContractArtifact,
    LibSafeDowncast: LibSafeDowncast as ContractArtifact,
    LibStakingRichErrors: LibStakingRichErrors as ContractArtifact,
    MixinStake: MixinStake as ContractArtifact,
    MixinStakeBalances: MixinStakeBalances as ContractArtifact,
    MixinStakeStorage: MixinStakeStorage as ContractArtifact,
    MixinCumulativeRewards: MixinCumulativeRewards as ContractArtifact,
    MixinStakingPool: MixinStakingPool as ContractArtifact,
    MixinStakingPoolRewards: MixinStakingPoolRewards as ContractArtifact,
    MixinAbstract: MixinAbstract as ContractArtifact,
    MixinFinalizer: MixinFinalizer as ContractArtifact,
    MixinParams: MixinParams as ContractArtifact,
    MixinScheduler: MixinScheduler as ContractArtifact,
    TestAssertStorageParams: TestAssertStorageParams as ContractArtifact,
    TestCobbDouglas: TestCobbDouglas as ContractArtifact,
    TestCumulativeRewardTracking: TestCumulativeRewardTracking as ContractArtifact,
    TestDelegatorRewards: TestDelegatorRewards as ContractArtifact,
    TestExchangeManager: TestExchangeManager as ContractArtifact,
    TestFinalizer: TestFinalizer as ContractArtifact,
    TestInitTarget: TestInitTarget as ContractArtifact,
    TestLibFixedMath: TestLibFixedMath as ContractArtifact,
    TestLibSafeDowncast: TestLibSafeDowncast as ContractArtifact,
    TestMixinCumulativeRewards: TestMixinCumulativeRewards as ContractArtifact,
    TestMixinParams: TestMixinParams as ContractArtifact,
    TestMixinScheduler: TestMixinScheduler as ContractArtifact,
    TestMixinStake: TestMixinStake as ContractArtifact,
    TestMixinStakeBalances: TestMixinStakeBalances as ContractArtifact,
    TestMixinStakeStorage: TestMixinStakeStorage as ContractArtifact,
    TestMixinStakingPool: TestMixinStakingPool as ContractArtifact,
    TestMixinStakingPoolRewards: TestMixinStakingPoolRewards as ContractArtifact,
    TestProtocolFees: TestProtocolFees as ContractArtifact,
    TestProxyDestination: TestProxyDestination as ContractArtifact,
    TestStaking: TestStaking as ContractArtifact,
    TestStakingNoWETH: TestStakingNoWETH as ContractArtifact,
    TestStakingProxy: TestStakingProxy as ContractArtifact,
    TestStakingProxyUnit: TestStakingProxyUnit as ContractArtifact,
    TestStorageLayoutAndConstants: TestStorageLayoutAndConstants as ContractArtifact,
};
