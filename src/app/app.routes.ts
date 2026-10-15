import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Notes } from './pages/notes/notes';
import { Interview } from './pages/interview/interview';
import { CollectionFrameWork } from './pages/collection-frame-work/collection-frame-work';
import { Oops } from './pages/oops/oops';
import { DataStructuresAlgorithms  } from './pages/dSA/dSA';
import { Jdbc  } from './pages/jdbc/jdbc';
import { Spring  } from './pages/spring/spring';
import { JSP  } from './pages/j-sp/j-sp';
import { Hibernate  } from './pages/hibernate/hibernate';
import { Servlets  } from './pages/servlets/servlets';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'notes', component: Notes },
  { path: 'interview', component: Interview },
  { path: 'collection-framework', component: CollectionFrameWork },
  { path: 'oops', component: Oops },
  { path: 'dSA', component: DataStructuresAlgorithms  },
  { path: 'jdbc', component: Jdbc  },
  { path: 'spring', component: Spring  },
  { path: 'jsp', component: JSP  },
  { path: 'hibernate', component: Hibernate  },
  { path: 'servlets', component: Servlets  },
  { path: '**', redirectTo: '' }
];
