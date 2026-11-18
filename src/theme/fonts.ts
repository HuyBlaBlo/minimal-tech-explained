/**
 * Centralized font loading for minimal-tech-explainer.
 *
 * Uses @remotion/google-fonts which bundles font files and blocks rendering
 * until fonts are ready — no host OS font installation required.
 *
 * Both Inter (SIL OFL 1.1) and JetBrains Mono (SIL OFL 1.1) are
 * open-source Google Fonts safe for any use.
 */

import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";

const { fontFamily: interFamily } = loadInter("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const { fontFamily: jetBrainsMonoFamily } = loadJetBrainsMono("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

/**
 * Loaded font family strings returned by @remotion/google-fonts.
 * Use these in style props to guarantee the font is available during render.
 */
export const LOADED_FONTS = {
  inter: interFamily,
  jetBrainsMono: jetBrainsMonoFamily,
} as const;
