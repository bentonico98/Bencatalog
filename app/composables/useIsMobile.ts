import { onMounted } from "vue";
import { useDisplay } from "vuetify";

export function useIsMobile() {
  const { mobile, mobileBreakpoint, name } = useDisplay();

  const isMobile = computed(() => {
    switch (name.value) {
      case "xs":
        return true;
      case "sm":
        return true;
      case "md":
        return true;
      case "lg":
        return false;
      case "xl":
        return false;
      case "xxl":
        return false;
    }

    return false;
  });
  return { isMobile };
}
