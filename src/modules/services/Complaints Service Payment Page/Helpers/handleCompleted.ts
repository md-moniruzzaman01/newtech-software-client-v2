export const handleCompleted = (id: string) => {
  window.open(`/complaints-service-payments/invoice/${id}`, "_blank");
  console.log(id);
};
