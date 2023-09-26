import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const getUser = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        
        let user = request.user;

        user.id = request.user.sub;
    
        return data ? user?.[data] : user;
    },
);