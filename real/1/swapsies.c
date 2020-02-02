#include <stdio.h>

/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    struct ListNode *next;
};



struct ListNode* swapPairs(struct ListNode* head){
    if (head == NULL) {
        return head;
    }

    struct ListNode* A = head;
    struct ListNode* ret = head->next != NULL ? head->next : head;

    while (A != NULL && A->next != NULL) {
        struct ListNode* B = A->next;
        struct ListNode* C = B->next;

        // Selecting
        if (C != NULL && C->next != NULL) {
            A->next = C->next;
        }
        else {
            A->next = C;
        }

        B->next = A;
        A = C;
    }

    return ret;
}

int main() {
    struct ListNode d = {4, NULL};
    struct ListNode c = {3, &d};
    struct ListNode b = {2, &c};
    struct ListNode a = {1, &b};

    printf("Did it happen here?\n");
    struct ListNode* swapped = swapPairs(&a);
    printf("Did it happen here?\n");

    for (int i = 0; i < 4; ++i) {
        if (swapped != NULL) {
            printf("%d ", swapped->val);
            swapped = swapped->next;
        }
    }
    printf("\n");

    return 0;
}


