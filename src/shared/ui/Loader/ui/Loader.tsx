import React, { FC } from 'react';

import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames('lds-ring', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);