# CodeUtils

Module with some useful functions to help and simplify your code.

## Functions

<dl>
<dt><a href="#random">random([a])</a> ⇒</dt>
<dd><p>Return a random array item.</p>
</dd>
<dt><a href="#random">random([max])</a> ⇒ <code>Number</code></dt>
<dd><p>return a random number following the max number restriction</p>
</dd>
<dt><a href="#random">random()</a> ⇒ <code>String</code></dt>
<dd><p>will return a random string</p>
</dd>
<dt><a href="#toProperCase">toProperCase([str], [start])</a> ⇒ <code>String</code></dt>
<dd><p>modify the string to start with an upper case</p>
</dd>
</dl>

<a name="random"></a>

## random([a]) ⇒
Return a random array item.

**Kind**: global function  
**Returns**: [any]  

| Param | Type | Description |
| --- | --- | --- |
| [a] | <code>Array</code> | Array to get a random item |

**Example**  
```js
require('123abc').Array.random(['abc', '123'])
```
<a name="random"></a>

## random([max]) ⇒ <code>Number</code>
return a random number following the max number restriction

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [max] | <code>Number</code> | max number |

**Example**  
```js
require('123abc').Number.random()
```
<a name="random"></a>

## random() ⇒ <code>String</code>
will return a random string

**Kind**: global function  
**Example**  
```js
require('123abc').String.random()
```
<a name="toProperCase"></a>

## toProperCase([str], [start]) ⇒ <code>String</code>
modify the string to start with an upper case

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [str] | <code>String</code> |  | string to get modified |
| [start] | <code>Boolean</code> | <code>false</code> | defines whether all words will start with a capital letter (false = no) |

**Example**  
```js
require('123abc').String.toProperCase('hi abc no') // Hi abc no
require('123abc').String.toProperCase('hi abc no', true) // Hi Abc No
```
