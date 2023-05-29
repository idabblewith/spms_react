import { Text, Box, Button, Center, Input, InputGroup, InputLeftElement, VStack, useToast, ToastId } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import React, { useRef, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa"
import {
    usernameLogin
} from "../api";
import { useForm, } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface ILoginData {
    username: string;
    password: string;
}

interface IIsModal {
    onClose?: () => void;
}

export const Login = ({ onClose }: IIsModal) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const toast = useToast();
    const toastIdRef = useRef<ToastId>();

    const addToast = (data: any) => {
        toastIdRef.current = toast(data)
    }

    interface ILoginForm {
        username: string;
        password: string;
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ILoginForm>(); // Generics could optionally go here (IUSucc,Errr,Variab)

    const mutation = useMutation(
        usernameLogin,
        // getJWT, 
        {
            onMutate: (data) => {
                // console.log("Mutation starting")
                addToast({
                    title: 'Logging in...',
                    description: "One moment!",
                    status: 'loading',
                    position: "bottom-right",
                    duration: 3000
                }
                );
            },
            onSuccess: (data) => {
                if (toastIdRef.current) {
                    toast.update(toastIdRef.current,
                        {
                            title: 'Welcome back!',
                            description: "Success.",
                            status: 'success',
                            position: "bottom-right",
                            // duration: 1000
                        }
                    )
                }
                reset();
                if (onClose) {
                    onClose()
                }

                // console.log("refetching");
                queryClient.refetchQueries(['me']);

                // console.log("navigating to dash");
                navigate("/");


                // queryClient.refetchQueries(['me']);
            },
            onError: (error) => {
                if (toastIdRef.current) {
                    toast.update(toastIdRef.current, {
                        title: 'Login failed',
                        description: "There was an error, please try again",
                        status: 'error',
                        position: "bottom-right",
                        duration: 3000
                    })
                }
                console.log("mut error")

                console.log(error)
            },
        }
    );


    const onSubmit = ({ username, password }: ILoginForm) => {
        mutation.mutate({ username, password });
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 70, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >

                <Center
                    height={"100vh"}
                    // height={"100%"}
                    width="100%"
                >
                    <Box>
                        <VStack as={"form"} onSubmit={handleSubmit(onSubmit)}>
                            <motion.div>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color="gray.400">
                                            <FaUser />
                                        </Box>
                                    } />

                                    <Input
                                        isInvalid={Boolean(errors.username?.message)}
                                        variant={"filled"}
                                        placeholder={"Username"}
                                        required
                                        {...register("username", {
                                            required: "Please provide a username",
                                        })}

                                    // onChange={(e) => setInputtedUsername(e.target.value)}
                                    />
                                    {/* <Text fontSize="sm" color="red.500">
                                    {errors.username?.message}
                                </Text> */}
                                </InputGroup>
                            </motion.div>

                            <motion.div>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color="gray.400">
                                            <FaLock />
                                        </Box>
                                    }
                                    />
                                    <Input
                                        isInvalid={Boolean(errors.password?.message)}
                                        variant={"filled"}
                                        placeholder={"Password"}
                                        required
                                        type="password"
                                        {...register("password", {
                                            required: "Please provide a password",
                                        })}
                                    />
                                    {/* <Text fontSize="sm" color="red.500">
                                    {errors.password?.message}
                                </Text> */}
                                </InputGroup>
                            </motion.div>


                            <Button
                                width={"100%"}
                                colorScheme={"blue"}
                                type='submit'
                                isLoading={mutation.isLoading}
                            >
                                Login
                            </Button>
                        </VStack>

                    </Box>
                </Center>
            </motion.div>

        </AnimatePresence>

    )
}