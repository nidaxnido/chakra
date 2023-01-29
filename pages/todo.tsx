import {VStack, Heading, IconButton, HStack, Text, StackDivider, Spacer, Input, Button, Badge, useToast} from '@chakra-ui/react'
import {FaSun, FaMoon, FaTrash } from 'react-icons/fa'
import {useState, useEffect} from 'react'

type Todo = {
    id : number,
    body : string
}
type List ={
    todos: Todo[],
    toDelete : (id : number)=>void
}
const TodoList : React.FC<List> = ({todos, toDelete}) =>{
    if(!todos.length){
        return <Badge colorScheme='green' m={4} p={4}>Yay! You're done with everything!</Badge>
    }
    return <VStack divider={<StackDivider />} 
                width='100%' maxW={{base:'90vw', sm:'80vw', lg:'50vw', xl:'40vw'}}
                alignItems='stretch'
                borderColor='gray.100' borderWidth='2px' p={4} borderRadius='lg'

                >
        {todos.map((todo) => {
                return <HStack key={todo.id}>
                <Text>{todo.body}</Text>
                <Spacer />
                <IconButton aria-label={''} icon={<FaTrash />} isRound={true} onClick={()=>toDelete(todo.id)} />
            </HStack>
            }   
        )}
    </VStack>
}
function AddTodo({toSubmit}: {toSubmit  : (item:Todo) => void}){
    const [content, useContent] = useState('');
    const toast = useToast()
    function doSubmit(e : React.FormEvent){
        e.preventDefault();
        if(!content){
            toast({
                title: 'Empty',
                description: "To do can't be empty",
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
              return
        }
        const newItem:Todo = {
            id : Math.random(),
            body : content
        }
        toSubmit(newItem);
        useContent('');
    }
    return (
        <form onSubmit={doSubmit}>
            <HStack>
                <Input variant='filled' placeholder='Add new to do' focusBorderColor='pink.400' 
                    value={content} onChange={(e) => {useContent(e.target.value)}} />
                <Button colorScheme='pink' px={8} type='submit'>Add New</Button>
            </HStack>
        </form>
        
    );
}
function Todo(){
    const initial : Todo[] = [
        {
            id : 1,
            body : 'Take a shower'
        },
        {
            id : 2,
            body : 'Do grocery shopping'
        },
    ];

    const [todos, useTodos] = useState(initial);

    function deleteTodo(id:number){
        const temp = todos.filter((temp:Todo)=> temp.id !== id);
        useTodos(temp);
        console.log(id, todos)
    }
    function addNew(item:Todo){
        useTodos([...todos, item]);
        console.log(todos)
    }

    return(
        <VStack p={4}>
            <IconButton icon={<FaSun />} isRound={true} size='lg' alignSelf='flex-end' aria-label={''} />
            <Heading mb='8' fontWeight='extrabold' 
                size='2xl' bgGradient='linear(to-r, red.400, pink.300, gray.500)'
                bgClip='text' >To do Application</Heading>
            <TodoList todos={todos} toDelete={deleteTodo} />
            <AddTodo toSubmit={addNew} />
        </VStack>
    );
}
export default Todo;