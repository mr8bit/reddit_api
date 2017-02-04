import {SELECT_SUBREDDIT } from '../actions/subreddit';

export function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state
  }
}
