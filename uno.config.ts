import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetTypography,
  presetWind3,
  presetWind4,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetWind4(),
    presetIcons(),
    presetAttributify(),
    presetTypography(),
    presetTagify(),
  ],
});
