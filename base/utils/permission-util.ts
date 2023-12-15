import { Route } from "@/types/index"
import { useAppPermission } from "@/composables/permission"

export const constructionRouters = (router: Route[]) => {
  const { hasPermission } = useAppPermission();
  const temp = router.filter((item) => {
    const permission = item.meta?.permission;
    if (!permission) return true;

    return hasPermission(permission)
  });

  // construct router with user permission
  for (const i in temp) {
    if (temp[i].children) {
      temp[i].children = constructionRouters(
        temp[i].children as Route[]
      );
    }
  }
  return temp;
}
