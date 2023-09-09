import { createRouter, createWebHistory } from 'vue-router';

// routers btw
import TemplateSyntax from '@/components/TemplateSyntax.vue';
import ClassandStyleBindings from '@/components/ClassandStyleBindings.vue';
import ConceptMethods from '@/components/ConceptMethods.vue';
import ReactivityFundamentals from '@/components/ReactivityFundamentals.vue';
import ComputedProperties from '@/components/ComputedProperties.vue';
import ListRendering from '@/components/ListRendering.vue';
import EventHandling from '@/components/EventHandling.vue';
import FormInputBindings from '@/components/FormInputBindings.vue';
import ConceptWatchers from '@/components/ConceptWatchers.vue';
import ConceptComponents from '@/components/ConceptComponents.vue';
import ConceptChildComponents from '@/components/ConceptChildComponents.vue';

const routes = [
  {
    path: '/templatesyntax',
    component: TemplateSyntax,
  },
  {
    path: '/conceptmethods',
    component: ConceptMethods,
  },
  {
    path: '/reactivityfundamentals',
    component: ReactivityFundamentals,
  },
  {
    path: '/computedproperties',
    component: ComputedProperties,
  },
  {
    path: '/classandstylebindings',
    component: ClassandStyleBindings,
  },
  {
    path: '/listrendering',
    component: ListRendering,
  },
  {
    path: '/eventhandling',
    component: EventHandling,
  },
  {
    path: '/forminputbindings',
    component: FormInputBindings,
  },

  {
    path: '/conceptwatchers',
    component: ConceptWatchers,
  },
  {
    path: '/conceptcomponents',
    component: ConceptComponents,
  },
  {
    path: '/conceptchildcomponents',
    component: ConceptChildComponents,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
