import { Action } from 'redux';
import counter from '../../app/reducers/counter';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
      expect(counter(undefined, {} as Action)).toMatchSnapshot();
    });

    it('should handle INCREMENT_COUNTER', () => {
      expect(counter(1, { type: 'INCREMENT_COUNTER' })).toMatchSnapshot();
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(counter(1, { type: 'DECREMENT_COUNTER' })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(counter(1, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
