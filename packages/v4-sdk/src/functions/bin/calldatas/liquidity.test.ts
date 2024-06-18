import { Address, parseEther, zeroAddress } from 'viem'
import { describe, expect, test } from 'vitest'
import { getBinIds, PoolKey } from '../../../utils'
import { getBinLiquidityConfigs } from '../getBinLiquidityConfigs'
import {
  AddBinLiquidityParams,
  binPoolAddLiquidityCalldata,
  binPoolRemoveLiquidityCalldata,
  RemoveBinLiquidityParams,
} from './liquidity'

// @todo @ChefJerry new utils for getAddLiquidityParameters
const getAddParams = ({
  poolKey,
  activeIdDesired,
  numBins,
  idSlippage,
  amountX,
  amountY,
  recipient,
}: {
  poolKey: PoolKey<'Bin'>
  activeIdDesired: bigint
  numBins: bigint
  idSlippage: bigint
  amountX: bigint
  amountY: bigint
  recipient: Address
}): AddBinLiquidityParams => {
  const binIds = getBinIds(activeIdDesired, numBins, true)
  const configs = getBinLiquidityConfigs({
    binId: Number(activeIdDesired),
    nbBinX: binIds.filter((id) => id >= 0).length,
    nbBinY: binIds.filter((id) => id <= 0).length,
  })
  return {
    poolKey,
    amount0: amountX,
    amount1: amountY,
    amount0Min: 0n,
    amount1Min: 0n,
    activeIdDesired,
    idSlippage,
    deltaIds: binIds,
    distributionX: configs.map((config) => config.distributionX),
    distributionY: configs.map((config) => config.distributionY),
    to: recipient,
    deadline: 601n,
  }
}

const getRemoveParams = ({
  poolKey,
  amount0Min,
  amount1Min,
  activeIdDesired,
  numBins,
  amounts,
  from,
}: {
  poolKey: PoolKey<'Bin'>
  amount0Min: bigint
  amount1Min: bigint
  activeIdDesired: bigint
  numBins: bigint
  amounts: bigint[]
  from: Address
}): RemoveBinLiquidityParams => {
  const binIds = getBinIds(activeIdDesired, numBins)
  return {
    poolKey,
    amount0Min,
    amount1Min,
    ids: binIds,
    amounts,
    from,
    to: from,
    deadline: 601n,
  }
}

describe('liquidity', () => {
  const bob = '0x1D96F2f6BeF1202E4Ce1Ff6Dad0c2CB002861d3e' as const
  const alice = '0x328809Bc894f92807417D2dAD6b7C998c1aFdac6' as const

  const activeId = 2n ** 23n
  const poolKey: PoolKey<'Bin'> = {
    currency0: '0xa0Cb889707d426A7A386870A03bc70d1b0697598',
    currency1: '0xc7183455a4C133Ae270771860664b6B7ec320bB1',
    hooks: zeroAddress,
    poolManager: '0xF62849F9A0B5Bf2913b396098F7c7019b51A820a',
    fee: 3000,
    parameters: {
      binStep: 10,
    },
  }
  test('add liquidity', () => {
    const params = getAddParams({
      poolKey,
      activeIdDesired: activeId,
      numBins: 3n,
      idSlippage: 0n,
      amountX: parseEther('1'),
      amountY: parseEther('1'),
      recipient: bob,
    })

    const calldata = binPoolAddLiquidityCalldata(params)

    expect(calldata).toEqual(
      `0x8856809d0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000a0cb889707d426a7a386870a03bc70d1b0697598000000000000000000000000c7183455a4c133ae270771860664b6b7ec320bb10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f62849f9a0b5bf2913b396098f7c7019b51a820a0000000000000000000000000000000000000000000000000000000000000bb800000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000003200000000000000000000000001d96f2f6bef1202e4ce1ff6dad0c2cb002861d3e00000000000000000000000000000000000000000000000000000000000002590000000000000000000000000000000000000000000000000000000000000003ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000006f05b59d3b20000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000006f05b59d3b200000000000000000000000000000000000000000000000000000000000000000000`
    )
  })

  test('remove liquidity', () => {
    const params = getRemoveParams({
      poolKey,
      amount0Min: 0n,
      amount1Min: 0n,
      activeIdDesired: activeId,
      numBins: 3n,
      amounts: [
        170141183460469231731687303715884105728000000000000000000n,
        340282366920938463463374607431768211456000000000000000000n,
        170311324643929700963418991019599989833500000000000000000n,
      ],
      from: alice,
    })

    const calldata = binPoolRemoveLiquidityCalldata(params)

    expect(calldata).toEqual(
      '0x9264cb860000000000000000000000000000000000000000000000000000000000000020000000000000000000000000a0cb889707d426a7a386870a03bc70d1b0697598000000000000000000000000c7183455a4c133ae270771860664b6b7ec320bb10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f62849f9a0b5bf2913b396098f7c7019b51a820a0000000000000000000000000000000000000000000000000000000000000bb800000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000220000000000000000000000000328809bc894f92807417d2dad6b7c998c1afdac6000000000000000000000000328809bc894f92807417d2dad6b7c998c1afdac60000000000000000000000000000000000000000000000000000000000000259000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000007fffff000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000008000010000000000000000000000000000000000000000000000000000000000000003000000000000000006f05b59d3b200000000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000006f2221926153ffffffffffffffffffffcd5fb353f360000'
    )
  })
})
