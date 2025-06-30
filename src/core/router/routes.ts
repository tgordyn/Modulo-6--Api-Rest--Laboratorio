
interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/',
  characterDetail: '/character/:id',

};
