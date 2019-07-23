import tsc from 'typescript';
import tsConfig from '../../tsconfig.json';

export default {
  process(src: string, path: string) {
    if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
      return tsc.transpile(src, tsConfig.compilerOptions as any, path, []);
    }
    return src;
  }
};
