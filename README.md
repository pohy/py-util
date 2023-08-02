# _Python_ utils

For when you need to work with string indices calculated in python. If the strings contain emojis, you'll know what I
mean. 👩‍❤️‍💋‍👩

See the following threads for more details:

- https://stackoverflow.com/questions/54369513/how-to-count-the-correct-length-of-a-string-with-emojis-in-javascript
- https://stackoverflow.com/questions/69584227/javascript-vs-python-emoji-length
- https://stackoverflow.com/a/46085089

```javascript
import {pyLen, pySlice} from '@pohy/py-util'

const length = pyLen(textWithEmojis)
const substring = pySlice(textWithEmojis, pythonCalculatedStartIndex, pythonCalculatedEndIndex)
```
