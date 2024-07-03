import { styled } from '@mui/material/styles';
import React from "react";

const ApexChart = React.lazy(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => null
});

export const Chart = styled(ApexChart)``;
