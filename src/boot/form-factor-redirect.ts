import { boot } from 'quasar/wrappers';
import { Platform } from 'quasar';
import RestrictedRoutes from 'src/router/redirects';

export default boot(({ urlPath, redirect }) => {
  const routeFound = RestrictedRoutes.filter((item) => {
    return (
      urlPath.includes(item.desktopPath) || urlPath.includes(item.mobilePath)
    );
  });

  if (!process.env.SERVER && routeFound.length > 0) {
    if (Platform.is.mobile) {
      RestrictedRoutes.forEach((item) => {
        if (urlPath.includes(item.desktopPath)) {
          redirect({ name: item.mobileName });
        }
      });
      // eslint-disable-next-line brace-style
    } else {
      RestrictedRoutes.forEach((item) => {
        if (urlPath.includes(item.mobilePath)) {
          redirect({ name: item.desktopName });
        }
      });
    }
  }
});
