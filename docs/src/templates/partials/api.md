### array
### [.after](lib/array.js#L32)

Returns all of the items in an array after the specified index. Opposite of [before][].

**Params**

* `array` **{Array}**: Collection    
* `n` **{Number}**: Starting index (number of items to exclude)    
* `returns` **{Array}**: Array exluding `n` items.  

**Example**

```handlebars
{{after "['a', 'b', 'c']" 1}}
//=> '["c"]'
```

### [.arrayify](lib/array.js#L45)

Cast the given `value` to an array.

**Params**

* `value` **{any}**    
* `returns` **{Array}**  

### [.before](lib/array.js#L64)

Return all of the items in the collection before the specified count. Opposite of [after][].

**Params**

* `array` **{Array}**    
* `n` **{Number}**    
* `returns` **{Array}**: Array excluding items after the given number.  

**Example**

```handlebars
{{before "['a', 'b', 'c']" 2}}
//=> '["a", "b"]'
```

### [.eachIndex](lib/array.js#L81)

**Params**

* `array` **{Array}**    
* `options` **{Object}**    
* `returns` **{String}**  

**Example**

```handlebars
{{#eachIndex collection}}
  {{item}} is {{index}}
{{/eachIndex}}
```

### [.filter](lib/array.js#L98)

**Params**

* `array` **{type}**    
* `value` **{type}**    
* `options` **{type}**    
* `returns` **{String}**  

### [.first](lib/array.js#L142)

Returns the first item, or first `n` items of an array.

**Params**

* `array` **{Array}**    
* `n` **{Number}**: Number of items to return, starting at `0`.    
* `returns` **{Array}**  

**Example**

```handlebars
{{first "['a', 'b', 'c', 'd', 'e']" 2}}
//=> '["a", "b"]'
```

### [.forEach](lib/array.js#L184)

Iterates over each item in an array and exposes the current item in the array as context to the inner block. In addition to the current array item, the helper exposes the following variables to the inner block:

- `index`
- `total`
- `isFirst`
- `isLast`
Also, `@index` is exposed as a private variable, and additional
private variables may be defined as hash arguments.

**Params**

* `array` **{Array}**    
* `returns` **{String}**  

**Example**

```js
var accounts = [
{'name': 'John', 'email': 'john@example.com'},
{'name': 'Malcolm', 'email': 'malcolm@example.com'},
{'name': 'David', 'email': 'david@example.com'}
];

// example usage
// {{#forEach accounts}}
//   <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
//     {{ name }}
//   </a>{{#unless isLast}}, {{/unless}}
// {{/forEach}}
```

### [.inArray](lib/array.js#L225)

Block helper that renders the block if an array has the given `value`. Optionally specify an inverse block to render when the array does not have the given value.

Given the array `['a', 'b', 'c']`:

**Params**

* `array` **{type}**    
* `value` **{type}**    
* `options` **{type}**    
* `returns` **{String}**  

**Example**

```handlebars
{{#inArray array "d"}}
  foo
{{else}}
  bar
{{/inArray}}
```

### [.isArray](lib/array.js#L245)

Returns true if `value` is an es5 array.

**Params**

* `value` **{any}**: The value to test.    
* `returns` **{Boolean}**  

**Example**

```handlebars
{{isArray "abc"}}
//=> 'false'
```

### [.join](lib/array.js#L267)

Join all elements of array into a string, optionally using a given separator.

**Params**

* `array` **{Array}**    
* `sep` **{String}**: The separator to use.    
* `returns` **{String}**  

**Example**

```handlebars
{{join "['a', 'b', 'c']"}}
//=> 'a, b, c'

{{join "['a', 'b', 'c']" '-'}}
//=> 'a-b-c'
```

### [.last](lib/array.js#L289)

Returns the last item, or last `n` items of an array. Opposite of [first][].

**Params**

* `array` **{Array}**    
* `n` **{Number}**: Number of items to return, starting with the last item.    
* `returns` **{Array}**  

**Example**

```handlebars
{{last "['a', 'b', 'c', 'd', 'e']" 2}}
//=> '["d", "e"]'
```

### [.lengthEqual](lib/array.js#L310)

Block helper that compares the length of the given array to
the number passed as the second argument. If the array length
is equal to the given `length`, the block is returned,
otherwise an inverse block may optionally be returned.

**Params**

* `array` **{type}**    
* `length` **{type}**    
* `options` **{type}**    
* `returns` **{String}**  

### [.map](lib/array.js#L337)

Returns a new array, created by calling `function` on each element of the given `array`.

**Params**

* `array` **{Array}**    
* `fn` **{String}**: The function to    
* `returns` **{String}**  

**Example**

```js
// register `double` as a helper
function double(str) {
  return str + str;
}
// then used like this:
// {{map "['a', 'b', 'c']" double}}
//=> '["aa", "bb", "cc"]'
```

### [.sort](lib/array.js#L368)

Sort the given `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

**Params**

* `array` **{Array}**: the array to sort.    
* `key` **{String|Function}**: The object key to sort by, or sorting function.    

**Example**

```handlebars
{{sort "['b', 'a', 'c']"}}
//=> 'a,b,c'
```

### [.sortBy](lib/array.js#L395)

Sort an `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

**Params**

* `array` **{Array}**: the array to sort.    
* `props` **{String|Function}**: One or more properties to sort by, or sorting functions to use.    

**Example**

```handlebars
{{sortBy '["b", "a", "c"]'}}
//=> 'a,b,c'

{{sortBy '[{a: "zzz"}, {a: "aaa"}]' "a"}}
//=> '[{"a":"aaa"},{"a":"zzz"}]'
```

### [.withAfter](lib/array.js#L420)

Use the items in the array _after_ the specified index
as context inside a block. Opposite of [withBefore][].

**Params**

* `array` **{Array}**    
* `idx` **{Number}**    
* `options` **{Object}**    
* `returns` **{Array}**  

### [.withBefore](lib/array.js#L447)

Use the items in the array _before_ the specified index as context inside a block.Opposite of [withAfter][].

**Params**

* `array` **{Array}**    
* `idx` **{Number}**    
* `options` **{Object}**    
* `returns` **{Array}**  

**Example**

```handlebars
{{#withBefore array 3}}
  {{this}}
{{/withBefore}}
```

### [.withFirst](lib/array.js#L469)

Use the first item in a collection inside a handlebars
block expression. Opposite of [withLast][].

**Params**

* `array` **{Array}**    
* `idx` **{Number}**    
* `options` **{Object}**    
* `returns` **{String}**  

### [.withLast](lib/array.js#L502)

Use the last item or `n` items in an array as context inside a block.
Opposite of [withFirst][].

**Params**

* `array` **{Array}**    
* `idx` **{Number}**: The starting index.    
* `options` **{Object}**    
* `returns` **{String}**  

### [.withSort](lib/array.js#L536)

Block helper that sorts a collection and exposes the sorted
collection as context inside the block.

**Params**

* `array` **{type}**    
* `prop` **{type}**    
* `options` **{type}**: Specify `reverse="true"` to reverse the array.    
* `returns` **{String}**

### code
### [.embed](lib/code.js#L32)

Embed code from an external file as preformatted text.

**Params**

* `fp` **{String}**: filepath to the file to embed.    
* `language` **{String}**: Optionally specify the language to use for syntax highlighting.    
* `returns` **{String}**  

**Example**

```js
{{embed 'path/to/file.js'}}

// specify the language to use
{{embed 'path/to/file.hbs' 'html')}}
```

### [.gist](lib/code.js#L55)

Embed a GitHub Gist using only the id of the Gist

**Params**

* `id` **{String}**    
* `returns` **{String}**  

### [.jsfiddle](lib/code.js#L71)

Generate the HTML for a jsFiddle link with the given `params`

**Params**

* `params` **{Object}**    
* `returns` **{String}**  

**Example**

```js
{{jsfiddle id="0dfk10ks" tabs="true"}}
```

### comparison
### [.and](lib/comparison.js#L28)

Block helper that renders the block if **both** of the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{type}**    
* `b` **{type}**    
* `options` **{type}**    
* `returns` **{String}**  

### [.compare](lib/comparison.js#L49)

Render a block when a comparison of the first and third
arguments returns true. The second argument is
the [arithemetic operator][operators] to use. You may also
optionally specify an inverse block to render when falsy.

**Params**

* `a` **{}**    
* `operator` **{}**: The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.    
* `b` **{}**    
* `options` **{}**: Handlebars options object    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.contains](lib/comparison.js#L120)

Block helper that renders the block if `collection` has the given `value`, using strict equality (`===`) for comparison, otherwise the inverse block is rendered (if specified). If a `startIndex` is specified and is negative, it is used as the offset from the end of the collection.

Given the array `['a', 'b', 'c']`:

**Params**

* `collection` **{Array|Object|String}**: The collection to iterate over.    
* `value` **{any}**: The value to check for.    
* `[startIndex=0]` **{Number}**: Optionally define the starting index.    
* `options` **{Object}**: Handlebars provided options object.    

**Example**

```handlebars
{{#contains array "d"}}
  This will not be rendered.
{{else}}
  This will be rendered.
{{/contains}}
```

### [.gt](lib/comparison.js#L140)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.gte](lib/comparison.js#L156)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.has](lib/comparison.js#L174)

Block helper that renders a block if `value` has `pattern`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `val` **{any}**: The value to check.    
* `pattern` **{any}**: The pattern to check for.    
* `options` **{Object}**    
* `returns` **{String}**  

### [.ifAny](lib/comparison.js#L212)

Similar to {{#if}} block helper but accepts multiple arguments.

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

**Example**

```js
{{ifAny this compare=that}}
```

### [.ifEq](lib/comparison.js#L239)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.ifEven](lib/comparison.js#L262)

Return true if the given vaue is an even number.

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

**Example**

```handlebars
{{#ifEven value}}
  render A
{{else}}
  render B
{{/ifEven}}
```

### [.ifGt](lib/comparison.js#L274)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.ifGt](lib/comparison.js#L289)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.ifGt](lib/comparison.js#L304)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.ifGt](lib/comparison.js#L319)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.ifNth](lib/comparison.js#L338)

Conditionally renders a block if the remainder is zero when
an operand is divided by a second operand. If an inverse block is
specified it will be rendered when the remainder is not zero.

**Params**

* **{}**: {Number}    
* **{}**: {Number}    
* `options` **{}**: Handlebars options object    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.ifOdd](lib/comparison.js#L361)

Return true if the given vaue is an odd number.

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

**Example**

```handlebars
{{#ifOdd value}}
  render A
{{else}}
  render B
{{/ifOdd}}
```

### [.is](lib/comparison.js#L374)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.isnt](lib/comparison.js#L390)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.lt](lib/comparison.js#L406)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.lte](lib/comparison.js#L423)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `options` **{}**: Handlebars options object    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.or](lib/comparison.js#L442)

Conditionally render a block if **either of** the given values
is truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**    
* `b` **{any}**    
* `options` **{}**: Handlebars options object    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.unlessEq](lib/comparison.js#L457)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Inverse block by default, or block if falsey.  

### [.unlessGt](lib/comparison.js#L472)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Inverse block by default, or block if falsey.  

### [.ifGt](lib/comparison.js#L487)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.ifGt](lib/comparison.js#L502)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.  

### [.ifGt](lib/comparison.js#L517)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### date
### [.moment](lib/date.js#L14)

Expose `moment` helper

### fs
### [.fileSize](lib/fs.js#L25)

Converts bytes into a nice representation with unit.

**Examples:**

- `13661855 => 13.7 MB`
  - `825399 => 825 KB`
  - `1396 => 1 KB`

**Params**

* `value` **{String}**    
* `returns` **{String}**  

### [.read](lib/fs.js#L61)

Read a file from the file system.

**Params**

* `filepath` **{String}**    
* `returns` **{String}**

### html
### [.css](lib/html.js#L24)

Add an array of <link></link> tags. Automatically resolves
relative paths to `opts.assets` in the Assemble task.

**Params**

* `context` **{Object}**    
* `returns` **{String}**  

### [.js](lib/html.js#L60)

Generate one or more `<script></script>` tags with paths/urls to javascript or coffeescript files.

**Params**

* `context` **{Object}**    
* `returns` **{String}**  

**Example**

```handlebars
{{js }}
```

### [.ul](lib/html.js#L94)

Block helper for creating unordered lists (`<ul></ul>`)

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**  

### [.ol](lib/html.js#L109)

Block helper for creating ordered lists  (`<ol></ol>`)

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**  

### [.thumbnailImage](lib/html.js#L128)

Returns a `<figure>` with a thumbnail linked to a full picture

**Params**

* `context` **{Object}**: Object with values/attributes to add to the generated elements:    
* `context.alt` **{String}**    
* `context.src` **{String}**    
* `context.width` **{Number}**    
* `context.height` **{Number}**    
* `returns` **{String}**: HTML `<figure>` element with image and optional caption/link.

### i18n
### [.i18n](lib/i18n.js#L20)

i18n helper. See [button-i18n](https://github.com/assemble/buttons)
for a working example.

**Params**

* `key` **{String}**    
* `options` **{Object}**    
* `returns` **{String}**

### index


### inflection
### [.inflect](lib/inflection.js#L22)

**Params**

* `count` **{type}**    
* `singular` **{type}**    
* `plural` **{type}**    
* `include` **{type}**    
* `returns` **{String}**  

### [.ordinalize](lib/inflection.js#L56)

Returns an ordinalized number (as a string).

**Params**

* `val` **{String}**: The value to ordinalize.    
* `returns` **{String}**: The ordinalized number  

**Example**

```js
{{ordinalize 1}}
//=> '1st'
{{ordinalize 21}}
//=> '21st'
{{ordinalize 29}}
//=> '29th'
{{ordinalize 22}}
//=> '22nd'
```

### logging
[logging-helpers](https://github.com/helpers/logging-helpers).

### markdown
### [.markdown](lib/markdown.js#L14)

Expose `{{markdown}}` block helper

### [.md](lib/markdown.js#L21)

Expose `{{md}}` helper

### math
### [.add](lib/math.js#L20)

Return the product of `a` plus `b`.

**Params**

* `a` **{Number}**    
* `b` **{Number}**    

### [.subtract](lib/math.js#L31)

Return the product of `a` minus `b`.

**Params**

* **{Number}**: a    

### [.divide](lib/math.js#L43)

Divide `a` by `b`

**Params**

* `a` **{Number}**    
* `b` **{Number}**: divisor    

### [.multiply](lib/math.js#L55)

Divide `a` by `b`.

**Params**

* `a` **{Number}**    
* `b` **{Number}**: multiplier    

### [.floor](lib/math.js#L66)

Get the `Math.floor()` of the given value.

**Params**

* `value` **{Number}**    

### [.ceil](lib/math.js#L77)

Get the `Math.ceil()` of the given value.

**Params**

* `value` **{Number}**    

### [.round](lib/math.js#L88)

Round the given value.

**Params**

* `value` **{Number}**    

### [.sum](lib/math.js#L106)

Returns the sum of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.    
* `returns` **{Number}**  

**Example**

```js
sum([1, 2, 3, 4, 5])
//=> '15'
```

### [.avg](lib/math.js#L132)

Returns the average of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.    
* `returns` **{Number}**  

**Example**

```js
avg([1, 2, 3, 4, 5])
//=> '3'
```

### misc
### [.default](lib/misc.js#L17)

**Params**

* `value` **{type}**    
* `defaultValue` **{type}**    
* `returns` **{String}**  

### [.noop](lib/misc.js#L30)

**Params**

* `options` **{type}**    
* `returns` **{String}**  

### [.withHash](lib/misc.js#L43)

Block helper that builds the context for the block
from the attributes hash.

**Params**

* `options` **{Object}**: Handlebars provided options object.

### number
### [.addCommas](lib/number.js#L20)

Add commas to numbers

**Params**

* `num` **{Number}**    
* `returns` **{Number}**  

### [.phoneNumber](lib/number.js#L33)

Convert a string or number to a formatted phone number.

**Params**

* `num` **{Number|String}**: The phone number to format, e.g. `8005551212`    
* `returns` **{Number}**: Formatted phone number: `(800) 555-1212`  

### [.random](lib/number.js#L51)

Generate a random number between two values

**Params**

* `min` **{Number}**    
* `max` **{Number}**    
* `returns` **{String}**  

### [.randomize](lib/number.js#L65)

Uses [randomatic] to generate a randomized string based on the given parameters.

See the [randomatic] docs for the full range of options.

* `returns` **{String}**  

### [.toAbbr](lib/number.js#L78)

Abbreviate numbers to the given number of `digits`.

**Params**

* `number` **{String}**    
* `digits` **{String}**    
* `returns` **{String}**  

### [.toExponential](lib/number.js#L111)

**Params**

* `number` **{type}**    
* `fractions` **{type}**    
* `returns` **{Number}**  

### [.toFixed](lib/number.js#L126)

**Params**

* `number` **{type}**    
* `digits` **{type}**    
* `returns` **{Number}**  

### [.toFloat](lib/number.js#L139)

**Params**

* `number` **{Number}**    
* `returns` **{Number}**  

### [.toInt](lib/number.js#L149)

**Params**

* `number` **{Number}**    
* `returns` **{Number}**  

### [.toPrecision](lib/number.js#L159)

**Params**

* `number` **{Number}**    
* `returns` **{Number}**

### object
### [.extend](lib/object.js#L27)

Extend the context with the properties of other objects.
A shallow merge is performed to avoid mutating the context.

**Params**

* `objects` **{Object}**: One or more objects to extend.    
* `returns` **{Object}**  

### [.forIn](lib/object.js#L64)

Block helper that iterates over the properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**  

### [.forOwn](lib/object.js#L90)

Block helper that iterates over the **own** properties of
an object, exposing each key and value on the context.

**Params**

* `obj` **{Object}**: The object to iterate over.    
* `options` **{Object}**    
* `returns` **{String}**  

### [.get](lib/object.js#L119)

Use property paths (`a.b.c`) to get a value or nested value from
the context. Works as a regular helper or block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.    
* `context` **{Object}**: The context object    
* `options` **{Object}**: The handlebars options object, if used as a block helper.    
* `returns` **{String}**  

### [.getObject](lib/object.js#L141)

Use property paths (`a.b.c`) to get an object from
the context. Differs from the `get` helper in that this
helper will return the actual object, including the
given property key. Also, this helper does not work as a
block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.    
* `context` **{Object}**: The context object    
* `returns` **{String}**  

### [.hasOwn](lib/object.js#L160)

Return true if `key` is an own, enumerable property of the given `context` object.

**Params**

* `key` **{String}**    
* `context` **{Object}**: The context object.    
* `returns` **{Boolean}**  

**Example**

```js
{{hasOwn context key}}
```

### [.isObject](lib/object.js#L177)

Return true if `value` is an object.

**Params**

* `value` **{String}**    
* `returns` **{Boolean}**  

**Example**

```js
{{isObject "foo"}}
//=> false
```

### [.merge](lib/object.js#L193)

Deeply merge the properties of the given `objects` with the
context object.

**Params**

* `object` **{Object}**: The target object. Pass an empty object to shallow clone.    
* `objects` **{Object}**    
* `returns` **{Object}**  

### [.parseJSON](lib/object.js#L217)

Block helper that parses a string using `JSON.parse`,
then passes the parsed object to the block as context.

**Params**

* `string` **{String}**: The string to parse    
* `options` **{Object}**: Handlebars options object    

### [.pick](lib/object.js#L231)

Pick properties from the context object.

**Params**

* `properties` **{Array|String}**: One or more proeperties to pick.    
* `context` **{Object}**    
* `options` **{Object}**: Handlebars options object.    
* `returns` **{Object}**: Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.  

### [.stringify](lib/object.js#L258)

Stringify an object using `JSON.stringify`.

**Params**

* `obj` **{Object}**: Object to stringify    
* `returns` **{String}**

### path
### [.relative](lib/path.js#L25)

Get the relative path from `a` to `b`.

**Params**

* `a` **{String}**    
* `b` **{String}**    
* `returns` **{String}**  

**Example**

```handlebars
{{relative a b}}
```

### [.extname](lib/path.js#L40)

**Params**

* `ext` **{String}**    
* `returns` **{String}**  

**Example**

```handlebars
{{extname "docs/toc.md"}}
//=> '.js'
```

### string
### [.capitalize](lib/string.js#L19)

Capitalize first word in a sentence

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.capitalizeAll](lib/string.js#L34)

Capitalize each word in a sentence

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.capitalizeEach](lib/string.js#L57)

Capitalize each word in a sentence

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.capitalizeFirst](lib/string.js#L73)

Capitalize the first word in a sentence

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.center](lib/string.js#L90)

Center a string using non-breaking spaces

**Params**

* `str` **{String}**    
* `spaces` **{String}**    
* `returns` **{String}**  

### [.dashify](lib/string.js#L109)

Replace periods in string with hyphens.

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.hyphenate](lib/string.js#L123)

Replace spaces in string with hyphens.

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.isString](lib/string.js#L137)

Return true if val is a string

**Params**

* `val` **{String}**    
* `returns` **{Boolean}**  

### [.lowercase](lib/string.js#L149)

Make all letters in the string lowercase

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.plusify](lib/string.js#L164)

Replace spaces in string with pluses.

**Params**

* `str` **{String}**: The input string    
* `returns` **{String}**: Input string with spaces replaced by plus signs  

### [.sentence](lib/string.js#L178)

Sentence case the given string

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.titleize](lib/string.js#L197)

Title case. "This is Title Case"

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.uppercase](lib/string.js#L221)

**Params**

* `options` **{type}**    
* `returns` **{String}**  

### [.reverse](lib/string.js#L241)

Reverse a string.

**Params**

* `str` **{type}**    
* `returns` **{String}**  

### [.occurrences](lib/string.js#L256)

Return the number of occurrances of a substring within a string.

**Params**

* `str` **{String}**    
* `substring` **{String}**    
* `returns` **{Number}**: Number of occurrances  

### [.replace](lib/string.js#L283)

Replace all occurrences of `a` in a string with `b`.

**Params**

* `str` **{String}**    
* `a` **{String}**    
* `b` **{String}**    
* `returns` **{String}**  

### [.ellipsis](lib/string.js#L299)

Truncate the input string and removes all HTML tags

**Params**

* `str` **{String}**: The input string.    
* `limit` **{Number}**: The number of characters to limit the string.    
* `append` **{String}**: The string to append if charaters are omitted.    
* `returns` **{String}**  

### [.truncate](lib/string.js#L319)

Truncates a string given a specified `length`, providing a
custom string to denote an `omission`.

**Params**

* `str` **{String}**    
* `length` **{String}**    
* `omission` **{String}**    
* `returns` **{String}**  

### [.startsWith](lib/string.js#L348)

Tests whether a string begins with the given prefix. Behaves sensibly if the string is null.

**Params**

* `prefix` **{String}**    
* `testString` **{String}**    
* `options` **{String}**    
* `returns` **{String}**  

**Example**

```handlebars
{{#startsWith "Goodbye" "Hello, world!"}}
  Whoops
{{else}}
  Bro, do you even hello world?
{{/startsWith}}
```

### url
### [.encodeURI](lib/url.js#L22)

Encodes a Uniform Resource Identifier (URI) component
by replacing each instance of certain characters by
one, two, three, or four escape sequences representing
the UTF-8 encoding of the character.

**Params**

* `str` **{String}**: The un-encoded string    
* `returns` **{String}**: The endcoded string  

### [.decodeURI](lib/url.js#L34)

Decode a Uniform Resource Identifier (URI) component.

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.urlResolve](lib/url.js#L48)

Take a base URL, and a href URL, and resolve them as a
browser would for an anchor tag.

**Params**

* `base` **{String}**    
* `href` **{String}**    
* `returns` **{String}**  

### [.urlParse](lib/url.js#L64)

Take a URL string, and return an object. Pass true as the
second argument to also parse the query string using the
querystring module. Defaults to false.

**Params**

* `path` **{String}**    
* `type` **{String}**    
* `query` **{String}**    
* `returns` **{String}**  

### [.stripQuerystring](lib/url.js#L75)

**Params**

* `url` **{type}**    
* `returns` **{String}**
