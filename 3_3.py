def function_name(search: str,status: bool,*args: object,**kwargs: object) -> list[int] | str:

#Обрабатывает переданные аргументы в зависимости от параметра search.

#Параметры:
#search : str

#Определяет режим обработки:
#- "args"   — работа с позиционными аргументами (*args)
#- "kwargs" — работа с именованными аргументами (**kwargs)

#status : bool
#Используется только при search == "args":
#- True  — вернуть список целых чисел из args
#- False — вернуть строку, состоящую из конкатенации всех args

#*args : object
#Произвольное количество позиционных аргументов.

#**kwargs : object
#Произвольное количество именованных аргументов.

#Возвращаемое значение:
#list[int] | str
#- Если search == "args" и status == True → список целых чисел.
#- Если search == "args" и status == False → строка из всех args.
#- Если search == "kwargs" → строка с парами "Key: ..., Value: ...".
#Исключения:
#ValueError:
#Если параметр search имеет недопустимое значение.

    result: list[int] = []
    result_2: str = ""

    if search == "args":
        if status:
            for i in args:
                if isinstance(i, int):
                    result.append(i)
            return result
        else:
            for i in args:
                result_2 += f"{i}"
            return result_2

    elif search == "kwargs":
        for k, v in kwargs.items():
            result_2 += f"Key: {k}, Value: {v}; "
        return result_2

    else:
        raise ValueError("Error for search")