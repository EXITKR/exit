import config from '../../config.yml';
import { configYamlInterface } from '../_interfaces/configYamlInterface';

const configInfo: configYamlInterface = config as configYamlInterface

export function getConfig(): configYamlInterface {
    return configInfo
}