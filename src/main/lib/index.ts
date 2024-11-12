import { APP_DIRECTORY_NAME } from '@shared/constants'
import { homedir } from 'os'

export const getRootDir = () => {
  return `${homedir()}/${APP_DIRECTORY_NAME}`
}
