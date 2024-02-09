"use client"

import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import dynamic from "next/dynamic";
import { Redirect,Route, BrowserRouter as Router } from "react-router-dom";



const App = dynamic(() => import('@/app/AppShell'), {
  ssr: false,
});

export default function Home() {
  return <App />;
}
