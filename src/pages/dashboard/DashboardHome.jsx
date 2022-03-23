
import React from 'react'
import useAuth from '../../hooks/useAuth'
import AdminDashboard from './admin/AdminDashboard'
import UserDashboard from './user/UserDashboard'

import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;
  margin-top: 300px;
  padding-top: 300px;
  position: absolute;
  top: 200px;
`;

const DashboardHome = () => {
  const {admin} = useAuth()

  return (
    <Container>
      { !admin && <UserDashboard/>}
      { admin && <AdminDashboard/>}
    </Container>
  )
}

export default DashboardHome