import { ErrorPage } from '../components/common/error';
import { NextPage, NextPageContext } from 'next';
import React from 'react';

const Error: NextPage<{ statusCode: number }> = ({ statusCode }) => <ErrorPage statusCode={statusCode} />;

Error.getInitialProps = async ({ res }: NextPageContext) => ({
  statusCode: res.statusCode,
});

export default Error;
