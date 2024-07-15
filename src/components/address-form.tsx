import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;

const ethereumAddressSchema = z
  .string()
  .refine((address) => ethereumAddressRegex.test(address), {
    message: "Invalid Ethereum address",
  });

const formSchema = z.object({
  address: ethereumAddressSchema,
});

const ProfileForm = ({
  onSubmit,
}: {
  onSubmit: (v: z.infer<typeof formSchema>) => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <div className="flex w-full max-w-lg items-center space-x-2">
                  <Input placeholder="0xa8311..." {...field} />
                  <Button type="submit">Search</Button>
                </div>
              </FormControl>
              <FormDescription>
                Address of the Pudgy Penguin NFT owner you want to view.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ProfileForm;
