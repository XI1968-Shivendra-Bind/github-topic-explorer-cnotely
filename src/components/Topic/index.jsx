import PropTypes from 'prop-types';
import { useLazyQuery } from "@apollo/client";
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { TOPIC_QUERY } from '../../apollo/queries'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '16px',
  },
  listitem: {
    justifyContent: 'space-between',
    margin: '8px'
  },
}));



const Topic = ({ name, setSearch }) => {
  const [debouncedName] = useDebounce(name, 1000);
  const [getTopic, { data }] = useLazyQuery(TOPIC_QUERY)
  const classes = useStyles();

  useEffect(() => {
    if (debouncedName) getTopic({ variables: { name: debouncedName } })
  }, [debouncedName])

  const onClickHandle = (topic) => {
    getTopic({ variables: { name: topic } })
    setSearch(topic)
  }

  const renderList = data?.topic?.relatedTopics.map(topic => (
    <ListItem button divider
      onClick={() => onClickHandle(topic.name)}
      key={topic.id}
      className={classes.lisItem}
    >
      <ListItemText primary={topic.name} />
      <span> {`Stargazers: ${topic.stargazerCount}`} </span>
    </ListItem>))

  return (
    <div className={classes.root}>
      {
        !debouncedName ?
          <div className={classes.flex}>
            <Typography variant="overline" data-testid="main-topic">
              topic:
        </Typography>
            <Typography variant="overline" >
            stargazers:
        </Typography>
          </div>
          : <>
            <div className={classes.flex}>
              <Typography variant="overline" data-testid="main-topic-data">
                topic: {data?.topic.name}
              </Typography>
              <Typography variant="overline" >
                stargazers: {data?.topic.stargazerCount}
              </Typography>
            </div>
            <Divider />
            <Typography align="center" variant="subtitle1" >
              Related topics
            </Typography>
            <List component="nav" className={classes.listitem} aria-label="topics" data-testid="related-topic-list">
              {renderList}
            </List>
          </>}
    </div>

  )
}

Topic.propTypes = {
  name: PropTypes.string,
  setSearch: PropTypes.func
}
export default Topic
