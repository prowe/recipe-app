import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ListRecipesDocument, ListRecipesQuery} from '../gql/graphql';

function RecipeItem({item}: {item: ListRecipesQuery['recipes'][0]}) {
  return (
    <View style={styles.recipe}>
      <Text>{item.title}</Text>
    </View>
  );
}

export default function RecipeList() {
  const {data, loading, refetch} = useQuery(ListRecipesDocument);

  return (
    <FlatList
      style={styles.list}
      data={data?.recipes}
      renderItem={RecipeItem}
      refreshing={loading}
      onRefresh={refetch}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  list: {},
  recipe: {
    padding: 10,
    fontSize: 24,
  },
});
