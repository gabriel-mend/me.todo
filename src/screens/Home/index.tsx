import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import { AddIcon, FlatList, HStack, IconButton, VStack } from 'native-base'
import { Alert } from 'react-native'
import Logo from '../../assets/Logo.svg'
import { Input } from '../../components/Input'
import { Task } from '../../components/Task'
import { getRealm } from '../../database/realm'

type Task = {
  id: string
  name: string
  status: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState('')

  async function handleAddTaskInTodo() {
    if (!task) return

    const realm = await getRealm()

    try {
      const created = realm.write(() => {
        realm.create('Task', {
          _id: uuid.v4(),
          name: task,
          status: false,
          created_at: new Date()
        })
      })

      console.log(created)

      Alert.alert('Tarefa', 'Tarefa cadastrada com sucesso!')

      setTask('')
    } catch (e) {
      return Alert.alert('Tarefa', 'Não foi possivel cadastrar tarefa!')
    } finally {
      realm.close()
    }
  }

  return (
    <VStack flex={1} bg="gray.700" pb={8}>
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
      </HStack>
      <VStack flex={1} px={6}>
        <HStack space={2} mt={10}>
          <Input value={task} onChangeText={text => setTask(text)} />
          <IconButton
            h="full"
            w={60}
            bg="green.500"
            borderRadius="sm"
            variant="solid"
            onPress={handleAddTaskInTodo}
            icon={<AddIcon />}
          />
        </HStack>
        <FlatList
          mt={4}
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              id={item.id}
              name={item.name}
              status={item.status}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </VStack>
    </VStack>
  )
}
