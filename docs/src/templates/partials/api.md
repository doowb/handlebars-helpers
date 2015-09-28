### array
### [.any](lib/array.js#L23)

**Params**

* `array` **{Array}**    
* `options` **{Object}**    

### [.after](lib/array.js#L45)

Returns all of the items in an arry after the specified index. Opposite of `{{before}}`.

**Params**

* `array` **{Array}**: Collection    
* `n` **{Number}**: Starting index (number of items to exclude)    
* `returns` **{Array}**: Array exluding `n` items.  

**Example**

```handlebars
{{after "['a', 'b', 'c']" 1}}
//=> '["c"]'
```

### [.before](lib/array.js#L65)

Return all of the items in the collection before the specified count. Opposite of {{after}}.

**Params**

* `array` **{Array}**    
* `n` **{Number}**    
* `returns` **{Array}**: Array excluding items after the given number.  

**Example**

```handlebars
{{before "['a', 'b', 'c']" 2}}
//=> '["a", "b"]'
```

### [.filter](lib/array.js#L79)

**Params**

* `array` **{type}**    
* `value` **{type}**    
* `options` **{type}**    
* `returns` **{String}**  

### [.eachIndexPlusOne](lib/array.js#L145)

**Params**

* `array` **{Array}**    
* `options` **{Object}**    
* `returns` **{String}**  

**Example**

```handlebars
{{#eachIndexPlusOne array}}
  {{item}} is {{index}}
{{/eachIndexPlusOne}}
```

### [.empty](lib/array.js#L161)

**Params**

* `array` **{type}**    
* `options` **{type}**    
* `returns` **{String}**  

### [.first](lib/array.js#L183)

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

### [.forEach](lib/array.js#L211)

```js var accounts = [ {'name': 'John', 'email': 'john@example.com'}, {'name': 'Malcolm', 'email': 'malcolm@example.com'}, {'name': 'David', 'email': 'david@example.com'} ];

// example usage
// {{#forEach accounts}}
//   <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
//     {{ name }}
//   </a>{{#unless isLast}}, {{/unless}}
// {{/forEach}}
```

### [.inArray](lib/array.js#L236)

**Params**

* `array` **{type}**    
* `value` **{type}**    
* `options` **{type}**    
* `returns` **{String}**  

### [.isArray](lib/array.js#L257)

Returns true if `value` is an array.

**Params**

* `value` **{any}**: The value to test.    
* `returns` **{Boolean}**  

**Example**

```handlebars
{{isArray "abc"}}
//=> 'false'
```

### [.join](lib/array.js#L279)

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

### [.last](lib/array.js#L302)

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

### [.length](lib/array.js#L323)

Returns the length of the given array.

**Params**

* `array` **{Array}**    
* `returns` **{Number}**: The length of the array.  

**Example**

```handlebars
{{length "['a', 'b', 'c']"}}
//=> 3
```

### [.lengthEqual](lib/array.js#L340)

**Params**

* `array` **{type}**    
* `length` **{type}**    
* `options` **{type}**    
* `returns` **{String}**  

### [.map](lib/array.js#L368)

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

### [.sort](lib/array.js#L399)

Sort the given `array`. If an array of objects is passed, you may optionally pass a `key` to sort on as the second argument. You may alternatively pass a sorting function as the second argument.

**Params**

* `array` **{Array}**: the array to sort.    
* `key` **{String|Function}**: The object key to sort by, or sorting function.    

**Example**

```handlebars
{{sort "['b', 'a', 'c']"}}
//=> 'a,b,c'
```

### [.sortBy](lib/array.js#L426)

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

### [.withAfter](lib/array.js#L451)

Use the items in the array _after_ the specified index
as context inside a block. Opposite of [withBefore][].

**Params**

* `array` **{Array}**    
* `idx` **{Number}**    
* `options` **{Object}**    
* `returns` **{Array}**  

### [.withBefore](lib/array.js#L478)

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

### [.withFirst](lib/array.js#L500)

Use the first item in a collection inside a handlebars
block expression. Opposite of [withLast][].

**Params**

* `array` **{Array}**    
* **{Number}**: count    
* `options` **{Object}**    
* `returns` **{*}**  

### [.withLast](lib/array.js#L530)

Use the last item in a collection inside a block.
Opposite of [withFirst][].

**Params**

* `array` **{Array}**    
* **{Number}**: count    
* `options` **{Object}**    
* `returns` **{*}**  

### [.withSort](lib/array.js#L556)

Block helper that sorts a collection and exposes the sorted
collection as context inside the block.

**Params**

* `array` **{type}**    
* `prop` **{type}**    
* `options` **{type}**: Specify `reverse="true"` to reverse the array.    
* `returns` **{String}**

### code
### [.embed](lib/code.js#L31)

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

### [.jsfiddle](lib/code.js#L57)

Generate the HTML for a jsFiddle link with the given `params`

**Params**

* `params` **{Object}**    
* `returns` **{String}**  

**Example**

```js
{{jsfiddle id="0dfk10ks" tabs="true"}}
```

### comparison
### [.contains](lib/comparison.js#L23)

Checks if a given value is present in a collection using strict
equality for comparisons, i.e. `===`. If fromIndex is negative,
it is used as the offset from the end of the collection.

**Params**

* `collection` **{Array|Object|string}**: The collection to iterate over.    
* `target` **{*}**: The value to check for.    
* `[fromIndex=0]` **{Number}**: Optionally define the index to search from.    

### [.any](lib/comparison.js#L47)

Returns `true` if a value exists in the given string, array or
object, or if a callback is passed checks to see if a truthy
value is returned for any element in a collection or for any
sub-string in a string.

**Params**

* `val` **{*}**: The value to check.    
* `pattern` **{*}**: The pattern to check for.    
* `options` **{Object}**    
* `returns` **{Boolean}**  

### [.and](lib/comparison.js#L63)

**Params**

* `a` **{type}**    
* `b` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.gt](lib/comparison.js#L80)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.gte](lib/comparison.js#L97)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.is](lib/comparison.js#L114)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.isnt](lib/comparison.js#L131)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.lt](lib/comparison.js#L148)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.lte](lib/comparison.js#L165)

**Params**

* `value` **{type}**    
* `test` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.if_eq](lib/comparison.js#L269)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.unless_eq](lib/comparison.js#L284)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.if_gt](lib/comparison.js#L299)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**  

### [.unless_gt](lib/comparison.js#L314)

**Params**

* `context` **{type}**    
* `options` **{type}**    
* `returns` **{Boolean}**

### data
### [.stringify](lib/data.js#L19)

`JSON.stringify` exposed as a helper.

**Params**

* `obj` **{Object}**: Object to stringify    
* `returns` **{String}**

### date


### fs


### html
### [.ul](lib/html.js#L91)

Block helper for creating unordered lists (`<ul></ul>`)

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**  

### [.ol](lib/html.js#L106)

Block helper for creating ordered lists  (`<ol></ol>`)

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**  

### [.thumbnailImage](lib/html.js#L125)

Returns a `<figure>` with a thumbnail linked to a full picture

**Params**

* `context` **{Object}**: Object with values/attributes to add to the generated elements:    
* `context.alt` **{String}**    
* `context.src` **{String}**    
* `context.width` **{Number}**    
* `context.height` **{Number}**    
* `returns` **{String}**: HTML `<figure>` element with image and optional caption/link.

### i18n


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


### markdown


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

### [.noop](lib/misc.js#L28)

**Params**

* `options` **{type}**    
* `returns` **{String}**

### number
### [.phoneNumber](lib/number.js#L31)

Output a formatted phone number

**Params**

* `num` **{Number}**: The phone number to format, e.g. `8005551212`    
* `returns` **{Number}**: Formatted phone number: `(800) 555-1212`  

### [.randomize](lib/number.js#L62)

Uses [randomatic] to generate a randomized string based on the given parameters.

See the [randomatic] docs for the full range of options.

* `returns` **{String}**  

### [.toAbbr](lib/number.js#L75)

Abbreviate numbers to the given number of `digits`.

**Params**

* `number` **{String}**    
* `digits` **{String}**    
* `returns` **{String}**  

### [.toExponential](lib/number.js#L108)

**Params**

* `number` **{type}**    
* `fractions` **{type}**    
* `returns` **{Number}**  

### [.toFixed](lib/number.js#L123)

**Params**

* `number` **{type}**    
* `digits` **{type}**    
* `returns` **{Number}**

### object
### [.forIn](lib/object.js#L20)

Block helper that iterates over the properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**  

### [.forOwn](lib/object.js#L39)

Block helper that iterates over the **own** properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**    
* `options` **{Object}**    
* `returns` **{String}**  

### [.hasOwn](lib/object.js#L64)

Return true if `key` is an own, enumerable property of the given `obj`.

**Params**

* `key` **{String}**    
* `obj` **{Object}**: The object to check.    
* `returns` **{Boolean}**  

**Example**

```js
{{hasOwn obj key}}
```

### [.isObject](lib/object.js#L81)

Return true if `value` is an object.

**Params**

* `value` **{String}**    
* `returns` **{Boolean}**  

**Example**

```js
{{isObject "foo"}}
//=> false
```

### [.merge](lib/object.js#L97)

Recursively combine the properties of `o` with the
properties of other `objects`.

**Params**

* `o` **{Object}**: The target object. Pass an empty object to shallow clone.    
* `objects` **{Object}**    
* `returns` **{Object}**

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

### [.capitalizeFirst](lib/string.js#L33)

Capitalize the first word in a sentence

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.capitalizeEach](lib/string.js#L48)

Capitalize each word in a sentence

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.capitalizeAll](lib/string.js#L64)

Capitalize each word in a sentence

**Params**

* `str` **{String}**    
* `returns` **{String}**  

### [.center](lib/string.js#L87)

Center a string using non-breaking spaces

**Params**

* **{String}**: str    
* **{String}**: spaces    
* `returns` **{String}**  

### [.dashify](lib/string.js#L106)

Replace periods in string with hyphens.

**Params**

* **{String}**: str    
* `returns` **{String}**  

### [.hyphenate](lib/string.js#L119)

Replace spaces in string with hyphens.

**Params**

* **{String}**: str    
* `returns` **{String}**  

### [.lowercase](lib/string.js#L132)

Make all letters in the string lowercase

**Params**

* **{String}**: str    
* `returns` **{String}**  

### [.plusify](lib/string.js#L146)

Replace spaces in string with pluses.

**Params**

* **{String}**: str The input string    
* `returns` **{String}**: Input string with spaces replaced by plus signs  

### [.sentence](lib/string.js#L159)

Sentence case

**Params**

* **{String}**: str    
* `returns` **{String}**  

### [.titleize](lib/string.js#L177)

Title case. "This is Title Case"

**Params**

* **{String}**: str    
* `returns` **{String}**  

### [.uppercase](lib/string.js#L201)

**Params**

* `options` **{type}**    
* `returns` **{String}**  

### [.reverse](lib/string.js#L216)

**Params**

* `str` **{type}**    
* `returns` **{String}**  

### [.count](lib/string.js#L231)

Return the number of occurrances of a string, within a string

**Params**

* **{String}**: str       The haystack    
* **{String}**: substring The needle    
* `returns` **{Number}**: The number of times the needle is found in the haystack.  

### [.replace](lib/string.js#L259)

Replace occurrences of string "A" with string "B"

**Params**

* **{String}**: str    
* **{String}**: a    
* **{String}**: b    
* `returns` **{String}**  

### [.ellipsis](lib/string.js#L275)

Truncate the input string and removes all HTML tags

**Params**

* **{String}**: str      The input string.    
* **{Number}**: limit    The number of characters to limit the string.    
* **{String}**: append   The string to append if charaters are omitted.    
* `returns` **{String}**: The truncated string.  

### [.truncate](lib/string.js#L298)

Truncates a string given a specified `length`, providing a
custom string to denote an `omission`.

**Params**

* **{String}**: str    
* **{String}**: length    
* **{String}**: omission    
* `returns` **{String}**

### url
### [.stripQuerystring](lib/url.js#L71)

**Params**

* `url` **{type}**    
* `returns` **{String}**
