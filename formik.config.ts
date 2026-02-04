import { en } from "@formkit/i18n";
import { defineFormKitConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import { genesisIcons } from "@formkit/icons";

export default defineFormKitConfig({
  locales: { en },
  locale: "en",
  theme: "genesis",
  icons: {
    ...genesisIcons,
  },
});
