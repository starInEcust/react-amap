import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Ellipse, useEllipse } from '../../../';

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, Ellipse, useEllipse, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/Ellipse/README.md');
}
