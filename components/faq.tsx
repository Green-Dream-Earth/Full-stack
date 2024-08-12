import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/staticData";
import { Button } from "./button";

export function Faq() {
  return (
    <section className="container">
      <div className="text-center mb-14">
        <h2 className="text-gray-600 text-center font-bold text-3xl w-full mx-auto">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="flex flex-col items-center justify-center">
        {faqs.map((faq) => (
          <AccordionItem className="max-w-4xl w-full" key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="flex justify-between text-gray-500">
              <div className="w-[70%]">{faq.answer}</div>
              <Button variant="secondary" redirectPath="/booking" className="h-12">Take Action Now!</Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
