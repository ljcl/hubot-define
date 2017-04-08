## Functions

<dl>
<dt><a href="#fetchWordnikResource">fetchWordnikResource(word)</a> ⇒ <code><a href="#fetchWordnikResource">Promise.&lt;fetchWordnikResource&gt;</a></code></dt>
<dd><p>Fetch resources from the wordnik api</p>
</dd>
<dt><a href="#formatWordnikDefinitions">formatWordnikDefinitions(word, json)</a> ⇒ <code><a href="#formatWordnikDefinitions">Promise.&lt;formatWordnikDefinitions&gt;</a></code></dt>
<dd><p>Fetch resources from the wordnik api</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#fetchWordnikResource">fetchWordnikResource</a></dt>
<dd></dd>
<dt><a href="#formatWordnikDefinitions">formatWordnikDefinitions</a></dt>
<dd></dd>
</dl>

<a name="fetchWordnikResource"></a>

## fetchWordnikResource(word) ⇒ <code>[Promise.&lt;fetchWordnikResource&gt;](#fetchWordnikResource)</code>
Fetch resources from the wordnik api

**Kind**: global function  
**Returns**: <code>[Promise.&lt;fetchWordnikResource&gt;](#fetchWordnikResource)</code> - A promise to the api response.  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | The string to search for on wordnik. |

<a name="formatWordnikDefinitions"></a>

## formatWordnikDefinitions(word, json) ⇒ <code>[Promise.&lt;formatWordnikDefinitions&gt;](#formatWordnikDefinitions)</code>
Fetch resources from the wordnik api

**Kind**: global function  
**Returns**: <code>[Promise.&lt;formatWordnikDefinitions&gt;](#formatWordnikDefinitions)</code> - A promise to the formatted response  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | The searched for on wordnik |
| json | <code>Array.&lt;string&gt;</code> | The json response from [fetchWordnikResource](#fetchWordnikResource) |

<a name="fetchWordnikResource"></a>

## fetchWordnikResource
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| * | <code>Array.&lt;string&gt;</code> | Array of definitions pertaining to the word |

<a name="formatWordnikDefinitions"></a>

## formatWordnikDefinitions
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| * | <code>reply</code> | Message response to send to channel/user |

