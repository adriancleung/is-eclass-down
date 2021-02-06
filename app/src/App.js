import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Box, Text } from 'grommet';
import './App.css';

const ECLASS_STATUS_TEXT = {
  none: 'eClass is up!',
  minor: 'eClass is having issues :/',
  major: 'eClass is down :(',
  critical: 'eClass is down :(',
};

const ECLASS_STATUS_COLOR = {
  none: 'status-ok',
  minor: 'status-warning',
  major: 'status-error',
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    status: { indicator: '', description: '' },
    page: { url: '', updated_at: '' },
  });
  const handleWindowSizeChange = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://status.eclass.ualberta.ca/api/v2/status.json')
      .then(res => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Box
      width={'100vw'}
      height={'calc(var(--vh, 1vh) * 100)'}
      background={'black'}
    />
  ) : (
    <Box
      width={'100vw'}
      height={'calc(var(--vh, 1vh) * 100)'}
      background={ECLASS_STATUS_COLOR[data.status.indicator]}
      animation={{ type: 'fadeIn', duration: 2000 }}
      justify={'center'}
      align={'center'}>
      <Text color={'white'} weight={900} size={'8vw'}>
        <a
          href={data.page.url}
          style={{ textDecoration: 'none', color: 'white' }}>
          {ECLASS_STATUS_TEXT[data.status.indicator]}
        </a>
      </Text>
      <Text
        color={'white'}
        weight={300}
        size={'1vw'}
        style={{ position: 'fixed', bottom: '0.5em' }}
        textAlign={'center'}>
        Last Updated At:{' '}
        {moment(data.page.updated_at).format('yyyy-MM-DD hh:mm:ss A')}
        <br />
        Made with <s>❤️</s> ☕️ and some hatred towards eClass.
        <br />
        <a
          href={'https://git.adrianleung.dev/is-eclass-down'}
          style={{ textDecoration: 'none', color: 'white' }}>
          Powered by GitHub Pages
        </a>
      </Text>
    </Box>
  );
};

export default App;
