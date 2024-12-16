import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Refly Status',
    url: 'https://refly-status.powerformer.workers.dev',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'refly.ai',
      url: 'https://refly.ai',
      description: 'Refly website',
    },
    {
      id: 'api.refly.ai',
      url: 'https://api.refly.ai',
      description: 'Refly API endpoint',
    },
  ],
  // monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnewwW9OuXgtuutyYSfFJ_AZdI-UpkUjP2wWi-zZWM3MKa8IzBceWCe9qB_-Lmk-S7mSFgqKVnokam/pub?gid=0&single=true&output=csv',
}
