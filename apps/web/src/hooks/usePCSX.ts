import { ChainId } from '@pancakeswap/chains'
import { EXPERIMENTAL_FEATURES } from 'config/experimentalFeatures'
import { SUPPORTED_CHAINS } from 'config/pcsx'
import { useExperimentalFeatureEnabled } from 'hooks/useExperimentalFeatureEnabled'
import { useMemo } from 'react'
import { useUserXEnable } from 'state/user/smartRouter'

export const usePCSX = () => {
  const featureEnabled = useExperimentalFeatureEnabled(EXPERIMENTAL_FEATURES.PCSX)
  const [xEnabled, setX] = useUserXEnable()
  const enabled = Boolean(xEnabled ?? featureEnabled)

  return [enabled, setX] as const
}

export function usePCSXEnabledOnChain(chainId?: ChainId) {
  return useMemo(() => chainId && SUPPORTED_CHAINS.includes(chainId), [chainId])
}