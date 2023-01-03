import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./elements/hello-world')
  ]);
  config.globalResources([
    PLATFORM.moduleName('./elements/ph-alarm')]);
}
