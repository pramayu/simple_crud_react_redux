import { SET_GAMES, ADD_GAME, GAME_FETCHED, GAME_UPDATE, GAME_DELETE } from '../actions/games';

export default function games(state = [], action = {}){
  switch(action.type) {
    case ADD_GAME:
      return [
        ...state,
        action.game
      ];

    case GAME_FETCHED:
        const index = state.findIndex(item => item._id === action.game._id);
        if (index > -1){
          return state.map(item => {
            if(item._id === action.game._id) return action.game
          })
        } else {
          return [
            ...state,
            action.game
          ];
        }

    case GAME_DELETE:
      return state.filter(item => item._id !== action.gameId);

    case GAME_UPDATE:
      return state.map(item => {
        if(item._id === action.game._id) return action.game;
        return item;
      });

    case SET_GAMES:
      return action.games;
    default:
      return state;
  }
}
