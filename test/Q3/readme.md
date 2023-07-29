#### Sharding is a method for distributing a single dataset across multiple databases, which can then be stored on multiple machines. This allows for larger datasets to be split into smaller chunks and stored in multiple data nodes, increasing the total storage capacity of the system1.

#### MongoDB uses sharding to support deployments with very large data sets and high throughput operations. MongoDB sharding works by creating a cluster of MongoDB instances consisting of at least three servers2:

#### The shard servers store the actual data chunks, which are subsets of the sharded collection The mongos servers act as query routers that direct read and write operations to the appropriate shards.

#### The config servers store the metadata and configuration information about the cluster, such as the shard key, the chunk ranges, and the shard locations. MongoDB supports two sharding strategies for distributing data across sharded clusters3:

#### Ranged sharding divides data into ranges based on the shard key values. Each chunk is then assigned a range based on the shard key values. Hashed sharding hashes the shard key values and assigns chunks based on the hashed values.