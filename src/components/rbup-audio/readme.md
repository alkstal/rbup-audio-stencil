# rbup-audio



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `chromeless` | `chromeless` |             | `boolean` | `undefined` |
| `src`        | `src`        |             | `string`  | `undefined` |


## Methods

### `play() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setup(options: PlayerOptions) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `stop() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [audio-core](../audio-core)
- [audio-controls](../audio-controls)

### Graph
```mermaid
graph TD;
  rbup-audio --> audio-core
  rbup-audio --> audio-controls
  style rbup-audio fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
